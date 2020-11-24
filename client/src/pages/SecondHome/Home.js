import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import { SongList, SongListItem } from "../../components/SongList/index";
import { Container, Row, Col } from "../../components/Grid";
import React, { useState } from "react";

function Home() {
    const [songs, setSongs] = useState([]);
    const [songSearch, setSongSearch] = useState("");
  
    const handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { value } = event.target;
      setSongSearch(value);
    };
  
    const handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get songs update the songs state
      event.preventDefault();
      API.getSongs(songSearch)
        .then(res => setSongs(res.data))
        .catch(err => console.log(err));
    };
  
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
           <form>
            <Container>
             <Row>
               <Col size="xs-9 sm-10">
                <Input
                name="SongSearch"
                value={songSearch}
                onChange={handleInputChange}
                placeholder="Search For a Song"
                />
               </Col>
          <Col size="xs-3 sm-2">
              <Button
                onClick={handleFormSubmit}
                type="success"
                className="input-lg"
              >
                  Search
              </Button>
               </Col>
             </Row>
            </Container>
           </form>
          </Col>
        </Row>
        <Row>
        <Col size="xs-12">
      {!songs.length ? (
        <h1 className="text-center">No Songs to Display</h1>
      ) : (
        <SongList>
          {songs.map(song => {
            return (
              <SongListItem
                key={song.title}
                title={song.title}
                href={song.href}
        
              />
            );
          })}
        </SongList>
      )}
    </Col>
  </Row>
</Container>


</div>
);
}


export default Home;