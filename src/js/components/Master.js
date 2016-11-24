var React=require('react');
var Weathers=require('./Weathers');

var fun=false;

var Master=React.createClass({

  getInitialState :function()
  {
      return({initialArray:[]});
  },

  getDataWithLocation :function()
  {
    console.log("Starting point");
    $.ajax({
      url:'http://api.openweathermap.org/data/2.5/forecast?q='+this.refs.cityBar.value+'&appid=3c31b0850f14517f09156e0a69401fa3',
      dataType:'json',
      async:false,
      type:'GET',

      success:function(data)
      {
        fun=true;
        this.setState({initialArray:data});
      }.bind(this),

      error: function(xhr, status, err)
      {
        console.error(err.toString());
      }.bind(this),

    });
  },

  render:function()
  {
    var cityname;
    if(fun)
    {
      cityname=<Weathers cityval={this.state.initialArray} />
    }
    console.log("cityval");
    console.log(this.state.initialArray);
    return(
      <div className="form-group" id="search">
      <center><button type="submit" className="btn btn-primary btn-block" id="btn1">5 Days Weather Report</button></center>
      <div className="h4">
      <h4><bold>Enter the location:</bold></h4>
      </div>
      <center>
              <input type="text" className="form-control"  ref="cityBar" placeholder="Search the city here" id="search"/>
      </center>

      <center><button type="submit" onClick={this.getDataWithLocation} className="btn btn-Success" id="btn">Display</button></center>
      {cityname}
      </div>
    )
  }
})

module.exports=Master;
