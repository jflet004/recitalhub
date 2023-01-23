class RecitalsController < ApplicationController

  def index
    recitals = Recital.all
    render json: recitals, include: ['users', 'users.tickets'], status: :ok
  end

  def show
    recital = Recital.find(params[:id])
    render json: recital, status: :ok
  end

  def create
    recital = Recital.create(recital_params)
    render json: recital, status: :created
  end

  def update
    recital = Recital.find(params[:id])
    recital.update(recital_params)
    render json: recital, status: :accepted
  end
  
  def destroy
    recital = Recital.find(params[:id])
    recital.destroy
    head :no_content
  end

  
  private

  def recital_params
    params.permit(:title, :description)
  end

end
