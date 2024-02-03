require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get top" do
    get pages_top_url
    assert_response :success
  end

  test "should get service" do
    get pages_service_url
    assert_response :success
  end

  test "should get reservation" do
    get pages_reservation_url
    assert_response :success
  end

  test "should get access" do
    get pages_access_url
    assert_response :success
  end

  test "should get lnquiry" do
    get pages_lnquiry_url
    assert_response :success
  end

  test "should get code" do
    get pages_code_url
    assert_response :success
  end
end
