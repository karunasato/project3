import React from "react";

import { Container, Row, Col } from "../Grid";

// Exporting both SongList and SongListItem from this file

// SongList renders a bootstrap list item
export function SongList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// SongListItem renders a bootstrap list item containing data from the song api call
export function SongListItem({
  title,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
        <Col size="xs-2 sm-12">
            <h3>{title}</h3>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to song!
            </a>
        </Col>
        </Row>
      </Container>
    </li>
  );
}