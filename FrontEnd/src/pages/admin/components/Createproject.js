import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//import Select from 'react-select';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  //customStyles
} from '../../../components/style';

class Createproject extends PureComponent {
  /*state = {
    selectedMaterial: null,
    allMaterialSelected: false,
    selectedEquipment: null,
    allEquipmentSelected: false,
  };

  handleSelectChangeM = (selectedOptions) => {
    this.setState({ selectedMaterial: selectedOptions });
  };

  handleSelectChangeE = (selectedOptions) => {
    this.setState({ selectedEquipment: selectedOptions });
  };

  handleSelectAllM = () => {
    const { materiallist } = this.props;
    const materialOptions = materiallist.map(item => ({
      value: item.id,
      label: item.name
    }));
    this.setState({
      selectedMaterial: materialOptions,
      allMaterialSelected: true
    });
  };*/

  /*handleSelectAllE = () => {
    const { equipmentlist } = this.props;
    const equipmentOptions = equipmentlist.map(item => ({
      value: item.id,
      label: item.name
    }));
    this.setState({
      selectedEquipment: equipmentOptions,
      allEquipmentSelected: true
    });
  };*/

  render() {
    //const { materiallist, equipmentlist } = this.props;
    //const { selectedMaterial, selectedEquipment } = this.state;

    /*const materialOptions = materiallist.map(item => ({
      value: item.id,
      label: item.name
    }));

    const equipmentOptions = equipmentlist.map(item => ({
      value: item.id,
      label: item.name
    }));*/

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
        {/*<ComponentoptionWapper>
          <Componentindex>Material</Componentindex>
          <Select
            placeholder="Select material"
            closeMenuOnSelect={false}
            options={materialOptions}
            isMulti
            value={selectedMaterial}
            onChange={this.handleSelectChangeM}
            styles={customStyles}
          />
          <Componentbutton className='selectall' onClick={this.handleSelectAllM}>
            Select All
          </Componentbutton>
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Equipment</Componentindex>
          <Select
            placeholder="Select equipment"
            closeMenuOnSelect={false}
            options={equipmentOptions}
            isMulti
            value={selectedEquipment}
            onChange={this.handleSelectChangeE}
            styles={customStyles}
          />
          <Componentbutton className='selectall' onClick={this.handleSelectAllE}>
            Select All
          </Componentbutton>
        </ComponentoptionWapper>*/}
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.CPsendinfo(this.project_name, this.pm_id/*, selectedMaterial, selectedEquipment*/)}>Create</Componentbutton>
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }

  /*componentDidMount() {
    this.props.getmaterial();
    this.props.getequipment();
  }*/
}

const mapStateToProps = (state) => ({
  //materiallist: state.admin.materiallist,
  //equipmentlist: state.admin.equipmentlist
})

const mapDisptchToProps = (dispatch) => {
  return {
    CPsendinfo(project_name, pm_id/*, selectedMaterial, selectedEquipment*/) {
      /*const materialChecked = selectedMaterial
        ? selectedMaterial.map(option => {
          const { value: id, label: name } = option;
          return { id, name };
        })
        : [];

      const equipmentChecked = selectedEquipment
        ? selectedEquipment.map(option => {
          const { value: id, label: name } = option;
          return { id, name };
        })
        : [];*/  
      dispatch(actionCreators.CPsendinfo(project_name.value, pm_id.value/*, materialChecked, equipmentChecked*/));
    }/*,
    getmaterial() {
      dispatch(actionCreators.getmaterial())
    },
    getequipment() {
      dispatch(actionCreators.getequipment())
    }*/
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Createproject);