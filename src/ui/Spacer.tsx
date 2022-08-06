import styled from 'styled-components'

export enum SpaceDirection {
    left="left",
    right="right",
    bottom="bottom",
    top="top",
}

const spaceUnit = 1;
interface SpacerProps {
    amount:number
    direction:SpaceDirection
}

export const Spacer = styled.div<SpacerProps>`
    margin-top: ${props => props.direction===SpaceDirection.top ? props.amount * spaceUnit+"rem":"unset"};
    margin-right: ${props => props.direction===SpaceDirection.right ? props.amount * spaceUnit+"rem":"unset"};
    margin-bottom: ${props => props.direction===SpaceDirection.bottom ? props.amount * spaceUnit+"rem":"unset"};
    margin-left: ${props => props.direction===SpaceDirection.left ? props.amount * spaceUnit+"rem":"unset"};
`