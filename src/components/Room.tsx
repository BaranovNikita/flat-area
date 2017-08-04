import * as React from 'react';
import { Room as model } from '../types/Types';

interface RoomInterface {
    room: model;
}

class Room extends React.Component<RoomInterface, {}> {
    render() {
        return (
            <div>
                {this.props.room.name}: {this.props.room.area}
            </div>
        );
    }
}

export default Room;
