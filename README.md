# Planets API
Simple RESTful API for our Solar System Planets.

Live URL: https://planet5.herokuapp.com

### How to Use
- For all planets data, hit at `/all` endpoint.
- For specific planet data, hit at `/<planet-name>` endpoint. For example `/earth`. 
- Planet name is not case-sensitive. `/urANUS` is a valid endpoint.

### Data Sources
- For data related to Planets
	* [Length of Day](https://spaceplace.nasa.gov/days/)
	* [Length of Year](https://spaceplace.nasa.gov/years-on-other-planets/)
- For data related to Moons, [NASA - Moons](https://solarsystem.nasa.gov/moons/)
- For data related to temperatures, [NASA - Solar System Temperatures](https://solarsystem.nasa.gov/resources/681/solar-system-temperatures/)

### FAQs
*Why only daytime temperature for Mercury?*
- The temperature (tempC) property was originally thought to be taken as average temperature.
- But unlike other planets, for Mercury the temperature range is so huge (430°C during the day, -180°C at night), average value would lose the extremeness.
- I also checked [another API](https://api.le-systeme-solaire.net/rest/bodies/mercury) which also outputs only daytime temperature of Mercury. So I also stayed with it.
- If you have better solution, a PR is appreciated.
