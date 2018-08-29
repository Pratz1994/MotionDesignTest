import React from "react";
import ProfileTableList from "./ProfileTableList";

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suburb: "",
            material: "",
            colour: "",
            room: "",
            length: "",
            width: "",
            pleats: "",
            styles: "",
            notes: "",
            portal: [],

        };
    }

    onChangeHandle = event => {
        // const target = event.target;
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    formSubmit = () => {
        let newId;

        if (this.state.portal.length != 0) {
            newId = this.state.portal[this.state.portal.length - 1].id + 1;
        } else {
            newId = 1;
        }


        var newObj = {
            id: newId,
            suburb: this.state.suburb,
            material: this.state.material,
            colour: this.state.colour,
            room: this.state.room,
            length: this.state.length,
            width: this.state.width,
            pleats: this.state.pleats,
            styles: this.state.styles,
            notes: this.state.notes,
        };

        let newPortal = this.state.portal;

        newPortal.push(newObj);
        //newProfiles


        this.setState({
            id: "",
            suburb: "",
            material: "",
            colour: "",
            room: "",
            length: "",
            width: "",
            pleats: "",
            styles: "",
            notes: "",
            portal: newPortal,
        });
    };

    deleteRecord = index => {

        let newPortal = this.state.portal;

        newPortal.splice(index, 1);

        this.setState({
            portal: newPortal
        });
    };

    updateRecord = (index, suburb, material, colour, room, length, width, pleats, styles, notes) => {
        this.state.portal[index].suburb = suburb;
        this.state.portal[index].material = material;
        this.state.portal[index].colour = colour;
        this.state.portal[index].room = room;
        this.state.portal[index].length = length;
        this.state.portal[index].width = width;
        this.state.portal[index].pleats = pleats;
        this.state.portal[index].styles = styles;
        this.state.portal[index].notes = notes;
       
        this.setState({
            portal: this.state.portal
        });
    };

    render() {
    
        
        return (
            <div >
                <h1>Logo</h1>
                    <br/>
                <h2>Product View</h2>
                <div className="row">
                <div className="col-md-4">
                            <select
                                className="form-control"
                                name="suburb"
                                value={this.state.suburb}
                                onChange={this.onChangeHandle}
                            >
                                <option value="">Please Select suburb</option>
                                <option value="Auckland">Auckland</option>
                                <option value="Silverdaile">Silverdaile</option>
                                <option value="Rotorua">Rotorua</option>
                            </select>
                        </div>
                            <div className="col-md-4">
                            <select
                                className="form-control"
                                name="material"
                                value={this.state.material}
                                onChange={this.onChangeHandle}
                            >
                                <option value="">Please Select Material</option>
                                <option value="Cotten">Cotten</option>
                                <option value="Silk">Silk</option>
                                <option value="Lace">Lace</option>
                            </select>
                        </div>
                <div className="col-md-4">
                            <select
                                className="form-control"
                                name="colour"
                                value={this.state.colour}
                                onChange={this.onChangeHandle}>
                                <option value="">Please Select colour</option>
                                <option value="Red">Red</option>
                                <option value="Green">Green</option>
                                <option value="Blue">Blue</option>
                            </select>
                    </div>
                </div>
                    
                <br />

                <h3>Curtains:</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Room</th>
                            <th>Length</th>
                            <th>Width</th>
                            <th>Pleats</th>
                            <th>Styles</th>
                            <th>Notes</th>
                        </tr>

                        <tr>

                            <td className="form-group">
                                <select
                                    className="form-control"
                                    name="room"
                                    value={this.state.room}
                                    onChange={this.onChangeHandle}
                                >
                                    <option value="">Please Select room</option>
                                    <option value="Living room">Living room </option>
                                    <option value="Bed room">Bed room </option>
                                    <option value="Bed room">Bed room </option>
                                </select>
                            </td>
                            <td className="form-group">
                                <input
                                    className="form-control"
                                    name="length"
                                    value={this.state.length}
                                    onChange={this.onChangeHandle}
                                />

                            </td>

                            <td className="form-group">
                                <input
                                    className="form-control"
                                    name="width"
                                    value={this.state.width}
                                    onChange={this.onChangeHandle}
                                />

                            </td>

                            <td className="form-group">
                                <select
                                    className="form-control"
                                    name="pleats"
                                    value={this.state.pleats}
                                    onChange={this.onChangeHandle}
                                >
                                    <option value="">Please Select Pleats</option>
                                    <option value="Pencil pleats">Pencil pleats</option>
                                    <option value="single">Single</option>
                                    <option value="Double">Double</option>
                                </select>
                            </td>

                            <td className="form-group">
                                <select
                                    className="form-control"
                                    name="styles"
                                    value={this.state.styles}
                                    onChange={this.onChangeHandle}
                                >
                                    <option value="">Styles</option>
                                    <option value="Curtain/Blind">Curtain/Blind</option>
                                    <option value="Ripple Fold">Ripple Fold</option>
                                    <option value="Sheer Curtains">Sheer Curtains</option>
                                </select>
                            </td>

                            <td className="form-group">
                                <input
                                    className="form-control"
                                    name="notes"
                                    value={this.state.notes}
                                    onChange={this.onChangeHandle} />
                            </td>

                        </tr>
                    </thead>

                </table>
                <button className="btn btn-primary btn-block" onClick={this.formSubmit}>
                    {" "}
                    ADD{" "}
                </button>
                <br />
                <br/>
                <h2>Display Details</h2>
                <ProfileTableList
                    portal={this.state.portal}
                    deleteRecord={this.deleteRecord}
                    updateRecord={this.updateRecord}
                />
            </div>
        );
    }
}
