package com.app.model.order;

import com.app.model.response.PageResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper=false)
public class OrderInfoResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<OrderInfo> items;
}
