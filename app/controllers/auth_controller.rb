class AuthController < ApplicationController
  def login
    render inertia: "Auth/Login"
  end

  def signup
    render inertia: "Auth/Signup"
  end
end
