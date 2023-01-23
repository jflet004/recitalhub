class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :invalid_record
  
  include ActionController::Cookies


  private
  
  def unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def invalid_record(error)
    render json: { message: error.message }, status: :not_found
  end



end
