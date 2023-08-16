import {Component, } from "react"
import Users from "./Users"
import classes from './UserFinder.module.css'
import { userContex } from "../store/UseerFinderContext"

// const DUMMY_USERS = [
//     { id: 'u1', name: 'Max' },
//     { id: 'u2', name: 'Manuel' },
//     { id: 'u3', name: 'Julie' },
//     { id: 'u4', name: 'Indira' },
//   ];

  class UserFinder extends Component{
    static contextType =userContex

constructor(){
    super()
    this.state={
        filteredUsers:[],
        searchTerm:''
    }
}
searchChangeHandler(e){
    this.setState({
        searchTerm:e.target.value
    })
}
componentDidMount(){
    this.setState({
        filteredUsers:this.context.users
    })
}
componentDidUpdate(prevProps,prevState){
    if(prevState.searchTerm!==this.state.searchTerm){
        this.setState({filteredUsers:this.context.users.filter((user)=>user.name.includes(this.state.searchTerm))})
    }
}
    render(){
 return(
    <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)}/>
               <Users users={this.state.filteredUsers}/>
            </div>
 )
    }
  }
// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState("")

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         )
//     }, [searchTerm])

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value)
//     }


//     return (
//         <div className={classes.finder}>
//             <input type="search" onChange={searchChangeHandler}/>
//             <Users users={filteredUsers}/>
//         </div>
//     )
// // };

export default UserFinder;
