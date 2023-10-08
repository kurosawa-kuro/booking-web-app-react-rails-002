class AuthController < ApplicationController
    # ユーザー登録
    def register
      user = User.new(register_params)
      user.password = params[:user][:password] # 練習用のため、パスワードの暗号化をしない
  
      if valid_password_confirmation? && user.save
        session[:user_id] = user.id
        render json: { status: 'SUCCESS', data: user }
      else
        render json: { status: 'ERROR', data: user.errors }
      end
    end
  
    # ログイン
    def login
      user = User.find_by(email: params[:email])
  
      # パスワードの一致を確認
      if user && user.password == params[:password]
        session[:user_id] = user.id
        render json: { status: 'SUCCESS', data: user }
      else
        render json: { status: 'ERROR', message: 'Invalid email or password' }
      end
    end
  
    # ログアウト
    def logout
      reset_session
      render json: { status: 'SUCCESS', message: 'Logged out' }
    end
  
    private
  
    def register_params
      params.require(:user).permit(:email, :password)
    end
  
    def valid_password_confirmation?
      params[:user][:password] == params[:user][:password_confirmation]
    end
  end