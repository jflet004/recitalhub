class RecitalsController < ApplicationController

  def index
    recitals = Recital.all
    render json: recitals, status: :ok
  end

  def show
    recital = Recital.find_by(id: params[:id])
    if recital
      render json: recital
    else
      render json: { error: "Recital not found" }, status: :not_found
    end
  end

  private

  def recital_params
    params.permit(:title, :description)
  end

end
