import React, {Component, useState} from "react";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import EmptyAvatar from "../../assets/photo-cover.svg"
import User from "./User";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            visible: 6
        }

        this.showMore = this.showMore.bind(this);
    }

    componentDidMount() {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users')
            .then(function(response) {
                return response.json();
            })
            .then((response) => {
                this.setState ({ users: response.users});
            })
    }

    showMore(event) {
        event.preventDefault();
        this.setState({
            visible: this.state.visible + 3
        })
    }

    render() {
        const { users } = this.state;
        return (
            <div className="users">
                <h1 className="users-title">Our cheerful users</h1>
                <p className="users-description">Attention! Sorting users by registration date</p>
                <Container>
                    <Row>
                        { users.sort(users.registration_timestamp).slice(0, this.state.visible).map(item => {
                             return (
                                 <User
                                     key={item.id}
                                     id={item.position.slice(0, 5)}
                                     avatar={item.photo ? item.photo : EmptyAvatar}
                                     title={item.name}
                                     position={item.position}
                                     email={item.email}
                                     phone={item.phone}
                                 />);
                        })}
                    </Row>
                </Container>
                {this.state.visible < this.state.users.length &&
                    <a href="#" className="sing-up" onClick={this.showMore}>Show more</a>
                }
            </div>
        );
    }
}

export default Users;