import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Componentcheckbox,
  Sendresult,
  Checkbutton,
  CheckItem
} from '../style';

class Createproject extends PureComponent {
  state = {
    materialChecked: [],
    equipmentChecked: []
  };

  handleCheckButtonClickM = (index) => {
    this.setState((prevState) => {
      const newMaterialChecked = [...prevState.materialChecked];
      newMaterialChecked[index] = !newMaterialChecked[index];
      return { materialChecked: newMaterialChecked };
    });
  };

  handleCheckButtonClickE = (index) => {
    this.setState((prevState) => {
      const newEquipmentChecked = [...prevState.equipmentChecked];
      newEquipmentChecked[index] = !newEquipmentChecked[index];
      return { equipmentChecked: newEquipmentChecked };
    });
  };

  render() {
    const { CPsend, CPsendvalue, materiallist, equipmentlist } = this.props;
    const { materialChecked, equipmentChecked } = this.state;

    return (
      <ComponentWapper>
        <Componenttitle>Create Project</Componenttitle>
        <ComponentoptionWapper>
          <Componentindex>Project Name</Componentindex>
          <Componentinput ref={(input) => { this.project_name = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>PM ID</Componentindex>
          <Componentinput ref={(input) => { this.pm_id = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Material</Componentindex>
          <Componentcheckbox>
            {
              materiallist.map((item, index) => (
                <CheckItem key={item.id} className='name'>
                  <Checkbutton
                    onClick={() => this.handleCheckButtonClickM(index)}
                    className={materialChecked[index] ? 'checked' : ''}
                  ></Checkbutton>
                  {item.name}
                </CheckItem>
              ))
            }
          </Componentcheckbox>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Equipment</Componentindex>
          <Componentcheckbox>
            {
              equipmentlist.map((item, index) => (
                <CheckItem key={item.id} className='name'>
                  <Checkbutton
                    onClick={() => this.handleCheckButtonClickE(index)}
                    className={equipmentChecked[index] ? 'checked' : ''}
                  ></Checkbutton>
                  {item.name}
                </CheckItem>
              ))
            }
          </Componentcheckbox>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.CPsendinfo(this.project_name, this.pm_id, materialChecked, equipmentChecked)}>Create</Componentbutton>
          {CPsend ? (CPsendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getmaterial();
    this.props.getequipment();
    this.setState({ materialChecked: new Array(this.props.materiallist.length).fill(false) });
    this.setState({ equipmentChecked: new Array(this.props.equipmentlist.length).fill(false) });
  }
}

const mapStateToProps = (state) => ({
  CPsend: state.admin.CPsend,
  CPsendvalue: state.admin.CPsendvalue,
  materiallist: state.admin.materiallist,
  equipmentlist: state.admin.equipmentlist
})

const mapDisptchToProps = (dispatch) => {
  return {
    CPsendinfo(project_name, pm_id, materialChecked, equipmentChecked) {
      dispatch(actionCreators.CPsendinfo(project_name.value, pm_id.value, materialChecked, equipmentChecked));
    },
    getmaterial() {
      dispatch(actionCreators.getmaterial())
    },
    getequipment() {
      dispatch(actionCreators.getequipment())
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Createproject);