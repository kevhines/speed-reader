class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: "Sign Up Failed!"
        end
    end

    def login
        user = User.find_by(username: params[:user][:username])
        if user && user.authenticate(params[:user][:password])
            render json: user
        elsif user
            render json: "Invalid Password"
        else
            render json: "Invalid username"
        end
    end  

    private
    
    def user_params
        params.require(:user).permit(:username, :password)
    end


end
