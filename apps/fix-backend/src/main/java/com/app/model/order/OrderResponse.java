package com.app.model.order;

import com.app.model.response.PageResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper=false)
public class OrderResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<Order> items;
}
