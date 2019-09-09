import { Neo4jDB } from 'meteor/ostrio:neo4jdriver';

const TestNeo4j = () => {
  console.log("TEST: Meteor.startup: Neo4jDB is a", typeof Neo4jDB)

  // Essential: connect to Neo4j server
  const db = new Neo4jDB(
    "http://localhost:7474"
  , { username: "neo4j"
    , password: "NEUtypjufndu4J"
    }
  )

  // const db = new Neo4jDB(
  //   'https://hobby-aopkkeipgodegbkeafjckmdl.dbs.graphenedb.com:24780'
  // , { username: "woodsdbuser"
  //   , password: "b.83XWFInVlE6v.satTBqUfv7hmpAJh"
  //   }
  // );

  // Optional: check that the database is accessible
  const cursor = db.query(
    "MERGE " +
    "(hello {name:'Hello'})-[link:LINK]->(world {name:'World'}) " +
    "RETURN hello, link, world")
  console.log(cursor.fetch())
}


export default TestNeo4j