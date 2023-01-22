class RecitalsController < ApplicationController

  def index
    recitals = Recital.all
    render json: recitals, status: :ok
  end

  def show
    recital = Recital.find(params[:id])
    render json: recital, status: :ok
  rescue ActiveRecord::RecordNotFound => error
    render json: {message: error.message}
  end

  def create
    recital = Recital.create(recital_params)
    render json: recital, status: :created
  end

  def update
    recital = Recital.find(params[:id])
    recital.update(recital_params)
    render json: recital, status: :accepted
    
  rescue ActiveRecord::RecordNotFound => error
    render json: {message: error.message}
  end
  
  def destroy
    recital = Recital.find(params[:id])
    recital.destroy
    head :no_content
    
  rescue ActiveRecord::RecordNotFound => error
    render json: {message: error.message}
  end

  
  private

  def recital_params
    params.permit(:title, :description)
  end

end
