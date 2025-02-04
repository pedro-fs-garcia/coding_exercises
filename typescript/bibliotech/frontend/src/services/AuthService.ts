
class AuthService {
    static baseURL:String = "http://localhost:5000";

    static async login(email:String, password:String){
        try{
            const response = await fetch( `${this.baseURL}/login`,{
                method:'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });

            const data = await response.json()

            if (!response.ok){
                throw new Error(data.error || 'Failed to login');
            }

            console.log(data)
            return data;

        }catch (error){
            console.error("Login error:", error)
            alert("Failed to login")
        }
        return false;
    };

    static async register(username:String, email:String, password:String){
        try{
            const response = await fetch(`${this.baseURL}/register`, {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({username, email, password})
            });

            const data = await response.json();

            if (response.status == 409){
                alert(data.error);
            }else if (response.status == 400){
                alert(data.error);
            }else if (response.status == 500){
                alert (data.error);
            }else if (response.status == 201){
                alert(data.message)
                return data;
            }
        }catch (error){
            console.error('Error registering user:', error);
        }
    };

    static async refreshAccessToken(){
        try{
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${this.baseURL}/refresh_access_token`, {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({token:token})
            });
            const data = await response.json()
            sessionStorage.setItem('token', data.token);
            alert('token atualizado')
            return true;
        }catch(error){
            console.error('Erro ao renovar token', error);
            return false;
        }
    };

    static async logout(){
        try{
            await fetch(`${this.baseURL}/logout`, {
                method: "POST",
                headers: {"Content-Type": "application/json" },
            });
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            window.location.href = "/login";
        }catch(error){
            console.log('Erro no logout', error);
        }
    };
}

export default AuthService;



        // const username = (document.getElementById("register-username") as HTMLInputElement).value;
        // const email = (document.getElementById("register-email") as HTMLInputElement).value;
        // const password = (document.getElementById("register-password") as HTMLInputElement).value;
        // console.log({ username, email, password });
        
        // try{
        //     const response = await fetch("http://localhost:5000/register", {
        //       method: "POST",
        //       headers: { "Content-Type": "application/json" },
        //       body: JSON.stringify({ username, email, password }),
        //     });
    
        //     const data = await response.json();

        //     if (response.status == 409){
        //         alert("user already exists")

        //     }else if(response.status == 400){
        //         alert("all fields are required")
            
        //     }else if (response.status == 500){
        //         alert("Failed to register user. Please try again later.")
            
        //     }else if (response.status == 201){
        //         window.location.reload()
        //         alert("user registered successfully. Please Login.")
        //         // navigate("/login")
        //     }
            
        // } catch (error) {
        //   console.error('Error registering user:', error);
        // }








        // const email = (document.getElementById("email") as HTMLInputElement).value;
        // const password = (document.getElementById("password") as HTMLInputElement).value;
        // console.log({email, password})
        
        // try{
        //     const response = await fetch("http://localhost:5000/login",{
        //         method:'POST',
        //         headers:{ "Content-Type": "application/json" },
        //         body: JSON.stringify({ email, password })
        //     });
        //     const data = await response.json()

        //     if(!response.ok){
        //         alert('Failed to login')
        //         throw new Error(data.error || 'Failed to login');
        //     }
            
        //     sessionStorage.setItem('token', data.loginToken);
        //     sessionStorage.setItem('userId', data.userId);
        //     console.log('Login successful:', data.loginToken)
        //     console.log(`token: ${sessionStorage.getItem("token")}`)
        //     console.log(`user id: ${sessionStorage.userId}`)
        //     navigate('/dashboard')
            
        // }catch (error) {
        //     console.error('Login error:', error)
        //     alert('Failed to login')
        // }