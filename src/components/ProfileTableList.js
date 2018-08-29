import React from 'react';

export default class ProfileTableList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editRow: '',
            suburb: "",
            material: "",
            colour: "",
            room: "",
            length: "",
            width: "",
            pleats: "",
            styles: "",
            notes: "",
        };
    }

    toggleEditRecord = (index, suburb, material, colour, room, length, pleats, styles, notes) => {

        this.setState({
            editRow: index,
            suburb: suburb,
            material: material,
            colour: colour,
            room: room,
            length: length,
            pleats: pleats,
            styles: styles,
            notes: notes,
        });
    };

    cancelEditRecord = index => {
        this.setState({
            editRow: '',
            suburb: "",
            material: "",
            colour: "",
            room: "",
            length: "",
            width: "",
            pleats: "",
            styles: "",
            notes: "",
        });
    };

    handleOnChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    saveEditRecord = (index) => {

        this.setState({
            editRow: ''
        });


        this.props.updateRecord(index, this.state.suburb, this.state.material, this.state.colour, this.state.room, this.state.length, this.state.width, this.state.pleats, this.state.styles, this.state.notes);

    };

    render() {
        var self = this;
        var thisEditRow = this.state.editRow;

        let profilesData = this.props.portal.map(function (profile, index) {
            console.log('profile', profile)
            if (thisEditRow === index) {
                return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <select className="form-control"
                                        type="text"
                                        name="suburb"
                                        defaultValue={profile.suburb}
                                        onChange={self.handleOnChange}>
                                        <option value="">Please Select suburb</option>
                                        <option value="Auckland">Auckland</option>
                                        <option value="Silverdaile">Silverdaile</option>
                                        <option value="Rotorua">Rotorua</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-control"
                                        type="text"
                                        name="material"
                                        defaultValue={profile.material}
                                        onChange={self.handleOnChange}
                                    >
                                        <option value="">Please Select Material</option>
                                        <option value="Cotten">Cotten</option>
                                        <option value="Silk">Silk</option>
                                        <option value="Lace">Lace</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-control"
                                        type="text"
                                        name="colour"
                                        defaultValue={profile.colour}
                                        onChange={self.handleOnChange}
                                    >
                                        <option value="">Please Select colour</option>
                                        <option value="Red">Red</option>
                                        <option value="Green">Green</option>
                                        <option value="Blue">Blue</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-control"
                                        type="text"
                                        name="room"
                                        defaultValue={profile.room}
                                        onChange={self.handleOnChange}
                                    >
                                        <option value="">Please Select room</option>
                                        <option value="Living room">Living room </option>
                                        <option value="Bed room">Bed room </option>
                                        <option value="Bed room">Bed room </option>
                                    </select>
                                </td>
                                <td>
                                    <input className="form-control"
                                        type="text"
                                        name="length"
                                        defaultValue={profile.length}
                                        onChange={self.handleOnChange}
                                    />
                                </td>
                                <td>
                                    <input className="form-control"
                                        type="text"
                                        name="width"
                                        defaultValue={profile.width}
                                        onChange={self.handleOnChange}
                                    />
                                </td>
                                <td>

                                    <select className="form-control"
                                        type="text"
                                        name="pleats"
                                        defaultValue={profile.pleats}
                                        onChange={self.handleOnChange}
                                    >
                                        <option value="">Please Select Pleats</option>
                                        <option value="Pencil Pleat">Pencil Pleat</option>
                                        <option value="single">Single</option>
                                        <option value="Double">Double</option>
                                    </select>
                                </td>
                                <td>

                                    <select className="form-control"
                                        type="text"
                                        name="styles"
                                        defaultValue={profile.styles}
                                        onChange={self.handleOnChange}
                                    >
                                        <option value="">Styles</option>
                                        <option value="Curtain/Blind">Curtain/Blind</option>
                                        <option value="Ripple Fold">Ripple Fold</option>
                                        <option value="Sheer Curtains">Sheer Curtains</option>
                                    </select>

                                </td>
                                <td>

                                    <input className="form-control"
                                        type="text"
                                        name="notes"
                                        defaultValue={profile.notes}
                                        onChange={self.handleOnChange}
                                    />

                                </td>
                                <td>
                                    <button className="btn btn-secondary" onClick={() => self.cancelEditRecord(index)}>
                                        Cancel
              </button>
                                    <button className="btn btn-success" onClick={() => self.saveEditRecord(index)}>Save</button>
                                </td>
                            </tr>
                           
                           
                                
                            );
            } else {
                return (
                    <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{profile.suburb}</td>
                                <td>{profile.material}</td>
                                <td>{profile.colour}</td>
                                <td>{profile.room}</td>
                                <td>{profile.length}</td>
                                <td>{profile.width}</td>
                                <td>{profile.pleats}</td>
                                <td>{profile.styles}</td>
                                <td>{profile.notes}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => self.toggleEditRecord(index, profile.suburb, profile.material, profile.colour, profile.room, profile.length, profile.width, profile.pleats, profile.styles, profile.notes)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => self.props.deleteRecord(index)}>Delete</button>
                                </td>
                            </tr>
                            );
            }
        });

        return (
            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Suburb</th>
                                        <th>Material</th>
                                        <th>Colour</th>
                                        <th>Room</th>
                                        <th>Length</th>
                                        <th>Width</th>
                                        <th>Pleats</th>
                                        <th>Style</th>
                                        <th>Notes</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>{profilesData}</tbody>
                            </table>
                            );
    }
}
