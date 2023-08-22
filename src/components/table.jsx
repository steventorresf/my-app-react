import { Button, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

const DataTable = ({ data, setData }) => {
    const eventDelete = (element) => {
        const array = data.filter(x => x.id !== element.id);
        setData(array);
    }

    const renderTooltip = props => (
        <Tooltip {...props}>Delete</Tooltip>
    );

    return (
        <>
            {data.map(item => {
                return (
                    <div key={item.id} className="container-tarea mb-2">
                        <Row className="align-items-center">
                            <div className="col-12 col-sm-8 col-md-9 ps-4">
                                {item.descripcion}
                            </div>
                            <div className="col-12 col-sm-4 col-md-3 text-end p-1 pe-4">
                                <OverlayTrigger placement="top" overlay={renderTooltip}>
                                    <Button size="sm" onClick={() => eventDelete(item)}>
                                        <i className="bi bi-trash"></i>
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        </Row>
                    </div>
                )
            })}
        </>
    )
}
export default DataTable;