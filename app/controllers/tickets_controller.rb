class TicketsController < ApplicationController

  # def index
  #   tickets = Ticket.all
  #   render json: tickets, status: :ok
  # end
  
  def create
    ticket = Ticket.create(ticket_params)
    render json: ticket, status: :created
  end

  def update
    ticket = Ticket.find(params[:id])
    ticket.update!(ticket_params)
    render json: ticket, status: :accepted
  end

  private

  def ticket_params
    params.permit(:price, :quantity, :user_id, :recital_id)
  end

end
