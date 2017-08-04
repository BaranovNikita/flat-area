import * as React from 'react';
import { Room as RoomModel } from '../types/Types';
import Room from './Room';

interface RoomListProps {
    rooms: RoomModel[];
}

class RoomList extends React.Component<RoomListProps, {}> {
    render() {
        return (
          <div>
              {this.props.rooms.map(room => <Room room={room} key={room.id} />)}
          </div>
        );
    }
}

export default RoomList;
