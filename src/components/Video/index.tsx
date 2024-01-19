import { Modal, ModalBody } from "reactstrap";

interface propsVideo {
    link: string
    title: string 
    isOpen?: boolean 
    toogle?: ()=>void
    isEmbend?: boolean
}

export function Video({link,title, isOpen, toogle,isEmbend}:propsVideo){
    if(isEmbend){
        return(
            <div style={{padding:'15px'}}>
                {/* @ts-ignore */}
                <iframe width="159" height="283" src={link} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
            </div>
        )
    }
    return(
        <Modal isOpen={isOpen} toggle={toogle}>
            <ModalBody>
                {/*@ts-ignore*/}
            <iframe width="319" height="567" src={link} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </ModalBody>
        </Modal>
    )
}