import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from "../actions/action";
import SmurfForm from "./SmurfForm";

const SmurfList = props => {
    const initSmurfs = props.getSmurfs;

    useEffect(() => {
        initSmurfs()
    }, [initSmurfs]);

    return (
        <div>
            <SmurfForm addSmurf={props.addSmurf} />
            <div className="smurfList">
                {props.smurf.map(smurf => (
                    <div className="eachSmurf" key={smurf.id}>
                        <section>
                            <p>Name: {smurf.name}</p>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </section>
                        <section>
                            <img src="https://seeklogo.com/images/S/Santa_Smurf-logo-72C1E9AA25-seeklogo.com.png" alt="smurfs logo" />
                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return ({
        smurf: state.smurf,
        error: state.error
    })
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfList);