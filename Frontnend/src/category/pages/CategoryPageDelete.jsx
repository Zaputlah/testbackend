import { useContext, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ManagerWidgetAction from "../../managers/widgets/ManagerWidgetAction";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import useDetail from "../../utils/hooks/useDetail";
import { UtilStateContextBase } from "../../utils/states/contexts";
import {
  CATEGORY_DATA_INIT,
  CATEGORY_FIELD_GUIDE,
} from "../states/constants";

const CategoryPageDelete = () => {
  const context = useContext(UtilStateContextBase);
  const navigate = useNavigate();
  const { id } = useParams();
  const categoryDetail = useDetail(
    ["category"], // 
    CATEGORY_DATA_INIT,
    CATEGORY_FIELD_GUIDE
  );

  useEffect(() => {
    categoryDetail.onGet(id);
  }, [id, context.auth.isAuthenticated]);

  const handleDelete = () => {
    categoryDetail.onDelete(id).then(() => {
      navigate("../");
    });
  };

  return (
    <Container>
      <ManagerWidgetTitle title={"Delete Category"} />
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <p>Are you sure you want to delete the category {categoryDetail.state.name}?</p>
              <p>Are you sure you want to delete the category {categoryDetail.state.description}?</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ManagerWidgetAction>
        <>
          <Button variant="outline-dark" onClick={() => navigate("../")}>
            Cancel
          </Button>

          <Button onClick={handleDelete} variant="danger">
            Delete
          </Button>
        </>
      </ManagerWidgetAction>
    </Container>
  );
};

export default CategoryPageDelete;
