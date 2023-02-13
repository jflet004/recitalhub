class RecitalsController < ApplicationController

  skip_before_action :user_authentication, only:[:index]
  before_action :is_admin?, only: [:create, :update]


  def index
    recitals = Recital.all
    render json: recitals, except: [:created_at, :updated_at], status: :ok
  end
  
  def show
    recital = Recital.find(params[:id])
    render json: recital, status: :ok
  end

  def create
    recital = Recital.create!(recital_params)
    render json: recital, status: :created
  end

  def update
    recital = Recital.find(params[:id])
    recital.update!(recital_params)
    render json: recital, status: :accepted
  end
  
  def destroy
    recital = Recital.find(params[:id])
    recital.destroy
    head :no_content
  end

  
  private

  def recital_params
    params.permit(:title, :description, :tickets_left, :capacity, :img_url)
  end


end
