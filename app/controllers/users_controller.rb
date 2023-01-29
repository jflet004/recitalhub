class UsersController < ApplicationController

  
  def show
    user = User.find(params[:id])
    render json: user, include: ['tickets', 'tickets.recital'], status: :ok
  end

  def create
    user = User.create(user_params)
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :password)
  end
  
end
