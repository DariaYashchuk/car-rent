import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 18px;
  flex-wrap: wrap;
`;

export const SelectTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.a`
  display: inline-block;

  padding: 12px 50px;
  border-radius: 12px;
  background: var(--regular-btn-color);
  color: var(--white-color);
  margin-top: 24px;

  font-weight: 600;
  line-height: 1.43;

  transition: all 250ms ease-in-out;
  &:hover {
    transform: scale(1.01);
    background: var(--active-btn-color);
    cursor: pointer;
  }
`;

export const SelectMileageWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const From = styled.input`
  display: block;
  max-width: 163px;
  height: 48px;
  border: 1px solid #f7f7fb;
  background-color: #f7f7fb;
  border-radius: 14px 0 0 14px;
  padding-left: 72px;

  font-size: 18px;
  line-height: 1.11;

  &:focus {
    outline: none;
    border: 1px solid rgba(18, 20, 23, 0.2);
    border-right: 1px solid #f7f7fb;
  }
`;

export const To = styled.input`
  display: inline-block;
  max-width: 163px;
  height: 48px;
  border: 1px solid #f7f7fb;
  border-left: 1px solid rgba(18, 20, 23, 0.2);
  background-color: #f7f7fb;
  border-radius: 0 14px 14px 0;
  padding-left: 40px;

  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;

  &:focus {
    outline: none;
    border: 1px solid rgba(18, 20, 23, 0.2);
  }
`;

export const SpanForFrom = styled.span`
  position: absolute;
  display: block;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  left: 23px;
  top: 14px;
`;

export const SpanForTo = styled.span`
  position: absolute;
  display: block;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  left: 178px;
  top: 14px;
`;
