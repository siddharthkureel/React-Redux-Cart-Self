import React, { Component } from 'react'
import FileUploader from "react-firebase-file-uploader";
import { connect } from "react-redux";
import { deleteImage,EditImage } from "../component/actions";
import {firebase} from "../firebase";
class FileUpload extends Component {
    state={
        imageName:'',
        imageURL:'',
        isUploading:false
    }
    componentWillMount(){
      if(this.props.id){
      return this.setState({
         imageName:this.props.imageName,
         imageURL:this.props.imageUrl
      })
    }
    }
    handleUploadStart=()=>{
         this.setState({ isUploading:true })
    }
    handleUploadSuccess=(filename)=>{
        this.setState({
            imageName:filename,
            isUploading:false
        })
        firebase.storage().ref('products').child(filename).getDownloadURL()
        .then(url=>{this.setState({
            imageURL:url
        })
         this.props.getFileUrl(url)
      })
      this.props.getFileName(filename)
    }
    resetImage=(id)=>{
      if(!id){
      this.props.deleteImage(this.state.imageName)
      return this.setState({imageURL:'',imageName:''})
      }else{
      this.props.EditImage(this.state.imageName,id)
        return this.setState({ imageURL: '', imageName: '' })
      }
    }
  render() {
    const {id}=this.props;
    return (
      <>
        {!this.state.imageURL  ? 
      <label id='image-button' style={{ backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor' }}>
      Select your Product
      <FileUploader
      hidden
      accept="image/*"
      name="image"
      randomizeFilename
      storageRef={firebase.storage().ref('products')}
      onUploadStart={this.handleUploadStart}
      onUploadSuccess={this.handleUploadSuccess}
      onProgress={this.handleProgress}
      />
      </label>
      :
      <>
        <img src={this.state.imageURL} alt={this.state.imageName} style={{ height:'15vh' }} />
        <span className="button button-red" style={{ pointer: 'cursor', float: 'left' }} 
        onClick={()=>this.resetImage(!id?null:id)} >Reset</span>
      </>
      }
      {this.state.isUploading?
      <p>Uploading...</p>
      :null
      }
      </>
    )
  }
}
export default connect(null,{deleteImage,EditImage})(FileUpload);