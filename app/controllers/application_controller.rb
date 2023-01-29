class ApplicationController < ActionController::API

  before_action :authenticate_user
  
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  private

  def authenticate_user
    render json: { errors: {error: "Not authorized"} }, status: :unauthorized unless current_user
  end

  def is_authorized?
    access_granted = current_user.admin?
    render json: { errors: {error: "You are not worthy to use this function"} }, status: :forbidden unless access_granted
  end

  def unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def record_not_found(error)
    render json: { errors: {error: "Not Found"} }, status: :not_found
  end

end
