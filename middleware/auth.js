export default function({store, route, redirect}){
    //if user is not authenticated
    if(!store.state.auth.isLoggedIn){
        return redirect('/')
    }
}