import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ManagerWidgetAction from "../../managers/widgets/ManagerWidgetAction";
import ManagerWidgetGuide from "../../managers/widgets/ManagerWidgetGuide";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import ManagerWidgetValidation from "../../managers/widgets/ManagerWidgetValidation";
import useCreate from "../../utils/hooks/useCreate";
import {
  CATEGORY_DATA_INIT,
  CATEGORY_FIELD_GUIDE,
  CATEGORY_FIELD_VALIDATION,
} from "../states/constants";

const CategoryPageCreate = () => {
  const navigate = useNavigate();
  const categoryCreate = useCreate(
    ["category"], 
    CATEGORY_DATA_INIT,
    CATEGORY_FIELD_GUIDE,
    CATEGORY_FIELD_VALIDATION
  );

  return (
    <>
      <Container>
        <ManagerWidgetTitle title={"New Category"} /> 

        <Row className="mb-3">
          <Col>
            <Card>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    required
                    minLength={3}
                    value={categoryCreate.state.name}
                    onChange={categoryCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryCreate.guide}
                    field={"name"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryCreate.validation.get("name")}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    name="description"
                    type="text"
                    required
                    minLength={3}
                    value={categoryCreate.state.description}
                    onChange={categoryCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryCreate.guide}
                    field={"description"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryCreate.validation.get("description")}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <ManagerWidgetAction>
        <>
          <Button variant="outline-dark" onClick={() => navigate("../")}>
            Back
          </Button>

          <Button
            onClick={() => {
              categoryCreate.onCreate().then(() => navigate("../"));
            }}
          >
            Save
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default CategoryPageCreate;
