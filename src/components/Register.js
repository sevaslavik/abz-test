import React, {Component} from "react";
import Container from "reactstrap/es/Container";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import CustomInput from "reactstrap/es/CustomInput";
import FormFeedback from "reactstrap/es/FormFeedback";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Button from "reactstrap/es/Button";

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            token: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.fileLoader = this.fileLoader.bind(this);
    }

    componentDidMount() {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(function(response) {
                return response.json();
            })
            .then(data => {
                this.setState({
                    token: data.token
                })
            })
            .catch(function(error) {
                alert(error);
            });
    }

    fileLoader = ({ target: { files } }) => {
        console.log(files[0]);
        return files[0];
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        formData.append("position_id" , this.state.customRadio);
        formData.append("name" , this.state.name);
        formData.append("email" , this.state.email);
        formData.append("phone" , this.state.phone);
        formData.append("photo", this.fileLoader);
        console.log(this.state);
        console.log(this.state.customFile)
        console.log(formData);
        const token = this.state.token

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: formData,
            headers: {
                'Token': token, // get token with GET api/v1/token method
            },
        })
            .then(function(response) {
                return response.json();
            })
            .then(data => {
                console.log(data);
                if(data.success) {
                    // process success response
                } else {
                    // proccess server errors
                }
            })
            .catch(function(error) {
                // proccess network errors
            });
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="register" id="sing-up-now">
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <h1 className="users-title">Register to get a work</h1>
                            <p className="users-description">
                                Attention! After successful registration and alert, update the list of users in the block from the top
                            </p>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="">Name</Label>
                                    <Input
                                        type="text"
                                        placeholder="Your name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    />
                                    <FormFeedback >Name OK!!!</FormFeedback>
                                    <FormText></FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="">Email</Label>
                                    <Input
                                        type="email"
                                        placeholder="Your email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.changeHandler}
                                    />
                                    <FormFeedback >Email OK!!!</FormFeedback>
                                    <FormText></FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="">Phone</Label>
                                    <Input
                                        type="phone"
                                        placeholder="+380 XX XXX XX XX"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={this.changeHandler}
                                    />
                                    <FormFeedback >Phone OK!!!</FormFeedback>
                                    <FormText>Еnter phone number in open format</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="rd">Select your position</Label>
                                    <div onChange={this.changeHandler}>
                                        <CustomInput
                                            type="radio"
                                            id="exampleCustomRadio"
                                            name="customRadio"
                                            label="Frontend developer"
                                            value={1}
                                            onChange={this.changeHandler}
                                        />
                                        <CustomInput
                                            type="radio"
                                            id="exampleCustomRadio2"
                                            name="customRadio"
                                            label="Backend developer"
                                            value={2}
                                            onChange={this.changeHandler}
                                        />
                                        <CustomInput
                                            type="radio"
                                            id="exampleCustomRadio3"
                                            name="customRadio"
                                            label="Designer"
                                            value={3}
                                            onChange={this.changeHandler}
                                        />
                                        <CustomInput
                                            type="radio"
                                            id="exampleCustomRadio4"
                                            name="customRadio"
                                            label="QA"
                                            value={4}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleCustomFileBrowser">Photo</Label>
                                    <CustomInput
                                        type="file" id="exampleCustomFileBrowser"
                                        name="customFile"
                                        label="Upload your photo"
                                        onChange={this.fileLoader}
                                    />
                                </FormGroup>
                                <div className="sing-up-for-form">
                                    <Button className="sing-up">Sing Up Now</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;