const roads = [
  'Alice\'s House-Bob\'s House',
  'Alice\'s House-Cabin',
  'Alice\'s House-Post Office',
  'Bob\'s House-Town Hall',
  'Daria\'s House-Ernie\'s House',
  'Daria\'s House-Town Hall',
  'Ernie\'s House-Grete\'s House',
  'Grete\'s House-Farm',
  'Grete\'s House-Shop',
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall'
];

function buildGraph (edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if(!(from in graph)) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from,to] of edges.map(e => e.split('-'))) {
    addEdge(from,to);
    addEdge(to,from);
  }
  return graph
}
const roadGraph = buildGraph(roads);
console.log('graph', roadGraph)

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if(!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if(p.place !== this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place !== p.address);
      return new VillageState(destination, parcels)
    }
  }
  static random(parcelCount = 5) {
    let parcels = [];
    for(let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place === address);
      parcels.push({ place, address});
    }
    return new VillageState('Post Office', parcels)
  }
}
// let first = new VillageState('Cabin',[{place: 'Post Office', address: 'Alice\'s House'}]);
// console.log(first)

// let next = first.move('Alice\'s House');
// let next = first.move('Alice\'s House')
// console.log('next after move', next);
// let nextnext = next.move('Alice\'s House');
// console.log('nextnext parcels', nextnext)
// console.log(next.place);

function runRobot(state, robot, memory) {
  for(let turn = 0;; turn++) {
    if(state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      return turn;
      // break;
    }
    let action = robot(state,memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
function randomRobot(state) {
  return {
    direction: randomPick(roadGraph[state.place])
  };
}


const mailRoute = [
  'Alice\'s House', 'Cabin', 'Alice\'s House', 'Bob\'s House', 'Town Hall', 'Daria\'s House', 'Ernie\'s House', 'Grete\'s House', 'Shop', 'Grete\'s House', 'Farm', 'Marketplace', 'Post Office'
];

function routeRobot(state, memory) {
  if(!memory || memory.length === 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for(let i = 0; i < work.length; i++){
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some(w => w.at === place)) {
        work.push({at: place, route: route.concat(place)})
      }
    }
  }
}
function goalOrientedRobot({place, parcels}, route) {
  if(!route || route.length === 0) {
    let parcel = parcels[0];
    if(parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
      // console.log(route);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  console.log(route)
  return {direction: route[0], memory: route.slice(1)};
}
// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), routeRobot);
runRobot(VillageState.random(), goalOrientedRobot);
// console.log(VillageState.random())

function compareRobots (robot1, robot2) {
  let robot1Sum = 0;
  let robot2Sum = 0;
  for(let i = 0; i < 100; i++) {
    let randomState = VillageState.random()
    let robot1Turns = runRobot(randomState, robot1);
    let robot2Turns = runRobot(randomState, robot2);
    robot1Sum += robot1Turns;
    robot2Sum += robot2Turns;
  }
  return {robot1: robot1Sum / 100, robot2: robot2Sum / 100}
}

function myRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for(let i = 0; i < work.length; i++){
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some(w => w.at === place)) {
        work.push({at: place, route: route.concat(place)})
      }
    }
  }
}
console.log(myRoute(roadGraph, 'Ernie\'s House', 'Cabin'))


function betterRobot({place, parcels}, route) {
  if(!route || route.length === 0) {
    let shortest = Infinity;
    let bestChoice;
    parcels.forEach(parcel => {
      let currentRoute = myRoute(roadGraph, place, parcel.place);
      if(currentRoute.length < shortest) {
        bestChoice = parcel;
        shortest = currentRoute.length;
      }
    })
    let parcel = bestChoice;
    console.log('parcel', parcel)
    if(parcel.place !== place) {
      route = myRoute(roadGraph, place, parcel.place);
    } else {
      route = myRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}
function lazyRobot({place, parcels}, route = []) {
  if (route.length === 0) {
    // Describe a route for every parcel
    let routes = parcels.map(parcel => {
      if (parcel.place !== place) {
        return {route: findRoute(roadGraph, place, parcel.place),
          pickUp: true};
      } else {
        return {route: findRoute(roadGraph, place, parcel.address),
          pickUp: false};
      }
    });

    // This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.
    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
  }
  function score({route, pickUp}) {
    return (pickUp ? 0.5 : 0) - route.length;
  }

  return {direction: route[0], memory: route.slice(1)};
}
runRobot(VillageState.random(), betterRobot)
console.log(compareRobots(lazyRobot, betterRobot));

// first part of robot should find the best route
// robot returns a direction and a memory of where to go next

