'use strict';

const React = require('react');

module.exports = React.createClass({

  render() {
    return (
      <div>
        <h1>Nightwatch demo</h1>
        { this.renderModalButtonGroup() }
        { this.renderInfoModal() }
        { this.renderPicturesModal() }
        { this.renderMapModal() }
        { this.renderNightwatchModal() }
      </div>
    );
  },

  renderModalButtonGroup() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#more-info">More Info</button>
        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a href="#" data-toggle="modal" data-target="#more-info">More Info</a></li>
          <li><a href="#" data-toggle="modal" data-target="#pictures">Pictures</a></li>
          <li><a href="#" data-toggle="modal" data-target="#map">Map</a></li>
          <li><a href="#" data-toggle="modal" data-target="#nightwatch">Nightwatch</a></li>
        </ul>
      </div>
    );
  },


  renderInfoModal() {
    return (
      <div className="modal fade" id="more-info" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">More Info</h4>
            </div>
            <div className="modal-body">
              <p>
                Bacon ipsum dolor amet cupim pancetta turducken sirloin tail, bresaola flank capicola ground round spare ribs. Pig venison ham hock bresaola. Capicola sausage short ribs fatback cupim. Cow biltong jowl shank prosciutto, short ribs chicken pig swine salami capicola ball tip. Ham leberkas brisket, frankfurter chuck beef salami shank ground round porchetta turducken jowl bacon tail.
              </p>
              <p>
                T-bone ham hock short ribs andouille tri-tip drumstick turducken leberkas. Chuck brisket bacon ball tip strip steak ribeye pork loin sausage. Pork short loin tenderloin doner, beef ribs shoulder pancetta kevin. Pancetta porchetta jowl pork chop landjaeger bresaola tri-tip alcatra pastrami. Rump chuck biltong turducken shoulder, ham swine turkey fatback. Porchetta jerky pork pork chop shoulder. Fatback short loin shankle, pork chop porchetta jowl beef alcatra rump flank swine meatloaf beef ribs.
              </p>
            </div>
            <div className="modal-footer">
              Nightwatch Demo
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderPicturesModal() {
    return (
      <div className="modal fade" id="pictures" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Pictures</h4>
            </div>
            <div className="modal-body">
              { this.renderCarousel() }
            </div>
            <div className="modal-footer">
              Nightwatch Demo
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderMapModal() {
    return (
      <div className="modal fade" id="map" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Map</h4>
            </div>
            <div className="modal-body">
              <p>
                Yeah there's no map... Sorry.
              </p>
            </div>
            <div className="modal-footer">
              Nightwatch Demo
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderNightwatchModal() {
    return (
      <div className="modal fade" id="nightwatch" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Nightwatch</h4>
            </div>
            <div className="modal-body">
              <a href="http://nightwatchjs.org/api">Nightwatch documentation</a>
            </div>
            <div className="modal-footer">
              Nightwatch Demo
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderCarousel() {
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="img/leaning-1.jpg" alt="Leaning" />
            <div className="carousel-caption">
              Tom leaning on an oompa loompa
            </div>
          </div>
          <div className="item">
            <img src="img/leaning-2.jpg" alt="Leaning" />
            <div className="carousel-caption">
              Tom leaning on a tower that's leaning
            </div>
          </div>
        </div>

        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }

});
