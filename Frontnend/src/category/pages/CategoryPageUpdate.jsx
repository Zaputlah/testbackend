import { useContext, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ManagerWidgetAction from "../../managers/widgets/ManagerWidgetAction";
import ManagerWidgetGuide from "../../managers/widgets/ManagerWidgetGuide";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import ManagerWidgetValidation from "../../managers/widgets/ManagerWidgetValidation";
import useDetail from "../../utils/hooks/useDetail";
import { UtilStateContextBase } from "../../utils/states/contexts";
import {
  CATEGORY_DATA_INIT,
  CATEGORY_FIELD_GUIDE,
  CATEGORY_FIELD_VALIDATION,
} from "../states/constants";

const CategoryPageUpdate = () => {
  const context = useContext(UtilStateContextBase);
  const navigate = useNavigate();
  const { id } = useParams();
  const categoryUpdate = useDetail(
    ["category"], 
    CATEGORY_DATA_INIT,
    CATEGORY_FIELD_GUIDE,
    CATEGORY_FIELD_VALIDATION
  );

  useEffect(() => {
    console.log(id);
    categoryUpdate.onGet(id);
  }, [id, context.auth.isAuthenticated]);

  return (
    <>
      <Container>
        <ManagerWidgetTitle title={"Update Category"} />
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
                    value={categoryUpdate.state.name}
                    onChange={categoryUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryUpdate.guide}
                    field={"name"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryUpdate.validation.get("name")}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    name="description"
                    type="text"
                    required
                    minLength={3}
                    value={categoryUpdate.state.description}
                    onChange={categoryUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryUpdate.guide}
                    field={"description"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryUpdate.validation.get("description")}
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
              categoryUpdate.onUpdate(id).then(() => navigate("../"));
            }}
          >
            Save
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default CategoryPageUpdate;
