import { Component } from "react";
import plus from './plus.png';
import done from './done.png';
import Swal from 'sweetalert2';


export class Plan extends Component {

    state = {
        userInput: "",
        toDoList: [],
    }

    getInput(text) {
        console.log(text.target.value)
    }

    addAlert(){
      
        (async () => {

            const { value: text } = await Swal.fire({
              input: 'text',
              inputLabel: 'Add Event',
              inputPlaceholder: 'Type here...',
              cancelButtonColor: '#041C32',
              confirmButtonColor: '#32658a',
              width: '300px',
              inputAttributes: {
                'aria-label': 'Type your message here'
              },
              showCancelButton: true,
              
            })

            if (text) {
              let listArray = this.state.toDoList;
              listArray.push(text);
              this.setState({toDoList: listArray, userInput: ''})
              console.log(listArray)
            }
            
            })()
    }

    eventFinished(event) {
        const li = event.target;
        li.classList.toggle('finished');
    }

    deleteItem(){
        let listArray = this.state.toDoList;
        listArray=[];
        this.setState({toDoList: listArray});
    }

    render() {
        return (
            <div>
                <div className="btn-add">
                    <img className="plus"  onClick={() => this.addAlert()} src = {plus} width="50px" alt="plus" />
                </div>

                <ul>
                    {this.state.toDoList.map((item, index) => (
                        <li 
                        onClick={this.eventFinished} 
                        key={index}>
                        <img className="check" src={done} width="12px" alt="to do" />
                        {item}
                        </li>
                    ))}
                </ul>

                <div className="button-del">
                    <button className="btn-del" onClick={() => this.deleteItem()}>Delete all Events</button>
                </div>
            
            
            
            </div>

        )
    }
}