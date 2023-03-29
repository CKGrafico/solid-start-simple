import "@papanasi/solid/papanasi.css";
import {
  Container,
  Row,
  Column,
  Avatar,
  Button,
  Pill,
  Spinner,
  Itchio,
  Code,
  useTooltipExtension,
} from "@papanasi/solid";

export default function Home() {
  useTooltipExtension();

  return (
    <main>
      <Container className="demo">
        <Row>
          <Column className="logo" basic="fill">
            <img
              src="https://raw.githubusercontent.com/CKGrafico/papanasi/main/docs/resources/logo-text.svg"
              width="200"
            />
          </Column>
        </Row>
        <Row>
          <Column className="title" basic="fill">
            <h2>Components</h2>
          </Column>
        </Row>
        <Row basic="column" xs="row">
          <Column basic={12} xs={6} className="element">
            <Avatar name="Alis Mug" />
            <span class="name">Avatar</span>
          </Column>
          <Column basic={12} xs={6} className="element">
            <Button variant="primary">Primary</Button>
            <span class="name">Button</span>
          </Column>
        </Row>
        <Row basic="column" xs="row">
          <Column basic={12} xs={6} className="element">
            <Pill variant="primary">Primary</Pill>
            <span class="name">Pill</span>
          </Column>
          <Column basic={12} xs={6} className="element">
            <Spinner variant="primary" className="spinner" />
            <span class="name">Spinner</span>
          </Column>
        </Row>
        <Row>
          <Column className="element">
            <Code
              editable
              language="javascript"
              theme="github"
              code="const age = 1;"
            ></Code>
            <span class="name">Code</span>
          </Column>
        </Row>
        <Row>
          <Column className="title" basic="fill">
            <h2>Enterprise</h2>
          </Column>
        </Row>
        <Row basic="column" xs="row">
          <Column basic={12} className="element">
            <Itchio user="ckgrafico" game="alice-ring">
              <Button variant="primary" outline>
                Open
              </Button>
            </Itchio>
            <span class="name">Itchio</span>
          </Column>
        </Row>
        <Row>
          <Column className="title" basic="fill">
            <h2>Extensions</h2>
          </Column>
        </Row>
        <Row basic="column" xs="row">
          <Column basic={12} className="element">
            <span title="Example of a tooltip">Hover me to see a title</span>
            <span class="name">Tooltip</span>
          </Column>
        </Row>
        <Row>
          <Column className="footer">
            <a
              href="https://papanasi.js.org"
              class="link"
              target="_blank"
              rel="noreferrer"
            >
              Visit the docs at papanasi.js.org
            </a>
          </Column>
        </Row>
      </Container>
    </main>
  );
}
