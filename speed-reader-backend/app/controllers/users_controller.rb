class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: {message: "Username already exists"}
        end
    end

    def login
        user = User.find_by(username: params[:user][:username])
        if user && user.authenticate(params[:user][:password])
            render json: user
        elsif user
            render json:  {message: "Invalid Password"}
        else
            render json:  {message: "Invalid Username"}
        end
    end  

    def find
        user = User.find_by(id: params[:user][:id])
        if user
            render json: user
        else
            render json:  {message: "Can Not Find User ID"}
        end
    end  

    private
    
    def user_params
        params.require(:user).permit(:username, :password, :id)
    end


end
