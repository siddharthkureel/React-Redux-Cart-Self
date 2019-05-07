import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import FileUpload from "../../ui/FileUpload";
class ProductForm extends Component {
    state={
        fileUrl:'',
        fileName:''
    }
    renderError({touched,error}){
        if (error && touched) {
            return <div >{error}</div>
        }
    }
    renderField=(props)=>{
       return(
           <>
           <div style={{ display:'flex' }}>
               
              <label style={{ margin: 'auto', display: 'block' }} htmlFor={props.label} >{props.label}</label>&nbsp;&nbsp;
              <input  type={props.type} {...props.input} />
           </div>
           <div style={{ color:'red',textAlign:'center' }} >{this.renderError(props.meta)}</div>
           </>
       );
    }
    storeFileUrl(fileUrl){
       this.setState({
           fileUrl
       })
    }
    storeFileName(fileName){
        this.setState({
            fileName
        })
    }
    onSubmit=(formValues)=>{
        let dataToSubmit = {...formValues}
        dataToSubmit.imageUrl=this.state.fileUrl
        dataToSubmit.imageName=this.state.fileName
        this.props.onSubmit(dataToSubmit)
    }
  render() {   
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} encType="multipart/form-data" >
        <Field type="text" name="name" label="Name" component={this.renderField} />
        <Field type="text" name="description" label="Description" component={this.renderField} />
        <Field type="number" min="1" name="price" label="Price" component={this.renderField} />
        <br /><br />
        <FileUpload 
        id={this.props.id} 
        imageUrl={!this.props.initialValues ? null : this.props.initialValues.imageUrl} 
        imageName={!this.props.initialValues ? null : this.props.initialValues.imageName} 
        getFileUrl={(fileUrl) => this.storeFileUrl(fileUrl)} 
        getFileName={(fileName)=>this.storeFileName(fileName)}
        />
        <br /><br /><br /><br />
        <button style={{ float:'left' }} className="button button-grey" type="submit" >Submit</button>
      </form>
    )
  }
}
const validate = (formValues) => {
    let error = {};
    if (!formValues.name) {
        error.name = 'you must enter a name';
    }
    if (!formValues.description) {
        error.description = 'you must enter a description';
    }
    if (!formValues.price) {
        error.price = 'you must enter a price';
    }
    return error;
}
export default reduxForm({
    form:'ProductForm',
    validate
})(ProductForm);