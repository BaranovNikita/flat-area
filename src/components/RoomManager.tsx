import * as React from 'react';
import { Room } from '../types/Types';
import RoomList from './RoomList';

interface State {
    rooms: Room[];
}

class RoomManager extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = {
            rooms: []
        };
        this.addRoom = this.addRoom.bind(this);
    }

    addRoom(room: Room) {
        const newRoom = new Room();
        newRoom.name = 'Super room';
        newRoom.area = 10;
        this.setState({
            rooms: [...this.state.rooms, newRoom]
        });
    }

    render() {
        return (
            <div>
                <RoomList rooms={this.state.rooms}/>
                <button onClick={() => this.addRoom(new Room())}>Add</button>
            </div>
        );
    }
}

export default RoomManager;
