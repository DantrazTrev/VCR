import React from "react";

class WaveSurferComponent extends React.Component {
  state = {
    regions: [],

    context: null,
    processor: null
  };

  componentDidMount() {}
  playIt = () => {
    this.wavesurfer.playPause();
  };

  playRegion = () => {
    this.wavesurfer.play(this.state.regions.start, this.state.regions.end);
  };

  removeAllRegions = () => {
    this.wavesurfer.clearRegions();
  };

  render() {
    return (
      <div>
        <audio
          id="song"
          src={this.props.audioURL}
          //src="https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a"
        />
      </div>
    );
  }
}

export default WaveSurferComponent;
