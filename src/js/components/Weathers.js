var React=require('react');
var CityWeather=require('./CityWeather');

var Weathers=React.createClass({

  render:function()
  {
    var newarray=[];
    var temp='';
    var temp_min='';
    var temp_max='';
    var description='';
    var pressure='';
    var humidity='';
    var clouds='';
    var dt_txt='';

    var cityArray=this.props.cityval;

    cityArray.list.forEach(function(param){
         temp=param.main.temp;
         temp_min=param.main.temp_min;
         temp_max=param.main.temp_max;
         description=param.weather[0].description;
         pressure=param.main.pressure;
         humidity=param.main.humidity;
         clouds=param.clouds.all;
         dt_txt=param.dt_txt;

         newarray.push(<CityWeather temp={temp} temp_min={temp_min} temp_max={temp_max} description={description} clouds={clouds} pressure={pressure} humidity={humidity} dt_txt={dt_txt} />);
     });

      return(
        <center>
        <div className="container-fluid" id="container">
        <table className="table table-inbox table-hover" >
                  <tbody>
                  {newarray}
                  </tbody>
        </table>
        </div>
        </center>
      )
   }
  });

module.exports=Weathers;
