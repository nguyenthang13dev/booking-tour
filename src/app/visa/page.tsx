import PackageWrap from "@/components/Package/packagewrap";
import { Row } from "antd";
const tour = () => {
    return <>
    <div className="container">
        <Row gutter={[25, 25]}>
            <PackageWrap />
            <PackageWrap />
            <PackageWrap />
        </Row>


        <Row gutter={[25, 25]}>
            <PackageWrap />
            <PackageWrap />
            <PackageWrap />



        </Row>



        <Row gutter={[25, 25]}>
            <PackageWrap />
            <PackageWrap />
            <PackageWrap />
        </Row>
    </div>
    
    </>
}


export default tour; 

 