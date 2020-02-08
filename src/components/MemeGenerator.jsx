import React, { Component } from 'react';
import axios from 'axios';
class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    randomImageUrl: 'http://i.imgflip.com/1bij.jpg',
    allMemeImages: []
  };

  componentDidMount() {
    axios.get('https://api.imgflip.com/get_memes').then(res => {
      const allMemeImages = res.data.data.memes;
      console.log(allMemeImages);
      this.setState({
        allMemeImages
      });
    });

    //console.log(promise.data.data.memes.length);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const randomNum = Math.floor(
      Math.random() * this.state.allMemeImages.length
    );
    const randomImageUrl = this.state.allMemeImages[randomNum].url;
    this.setState({
      randomImageUrl
    });
  };
  render() {
    const { topText, bottomText, randomImageUrl, allMemeImages } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='meme-form'>
          <div className='inputs'>
            <input
              type='text'
              placeholder='Top Text'
              name='topText'
              value={topText}
              onChange={this.handleChange}
            />
            <input
              type='text'
              placeholder='Bottom Text'
              name='bottomText'
              value={bottomText}
              onChange={this.handleChange}
            />
            <button
              className='btn waves-effect waves-light color purple darken-4'
              type='submit'
              name='action'
            >
              Gen
              <i className='material-icons right '>send</i>
            </button>
          </div>
        </form>
        <div className='meme'>
          <img src={randomImageUrl} alt='' />
          <h2 className='top'>{topText}</h2>
          <h2 className='bottom'>{bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
