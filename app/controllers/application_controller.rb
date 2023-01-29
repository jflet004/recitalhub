class ApplicationController < ActionController::API

  
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  private

  def authenticate_user
    render json: { errors: "Not authorized" }, status: :unauthorized unless current_user
  end

  def is_authorized?
    permitted = current_user.admin?
    render json: { errors: "You are not worthy to use this function" }, status: :forbidden unless permitted
  end

  def unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def record_not_found(error)
    render json: { errors: "Not Found" }, status: :not_found
  end

end
