import {
  Logo,
  GetStartedContainer,
  TextInput,
  Button,
  SliderEllipses,
  Dropdown,
} from "../../components";
import { useTheme } from "../../contexts/theme";

//TODO rework buttons so there is one instead of several

const GetStartedPresentation = ({
  currentSlide,
  form,
  handleChange,
  days,
  months,
  years,
  countries,
  cities,
  SelectDropdownItem,
  slideCount,
  SetActiveSlide,
  ValidateLocation,
  ValidateDate,
  errorForm,
  ValidateName,
}) => {
  const {
    state: { dark },
  } = useTheme();

  return (
    <div className="bg-primary dark:bg-dark-800 w-screen h-screen overflow-hidden flex flex-col justify-center items-center p-4 gap-y-4 pb-14">
      <div>
        <Logo width="10" />
      </div>
      <h1 className="text-white dark:text-primary text-center text-3xl font-open font-extrabold">
        Get Started
      </h1>
      <div className="flex-1 max-h-96 flex-col flex justify-center">
        {currentSlide === 0 && (
          <GetStartedContainer title="Name" key="33">
            <TextInput
              errorMsg={errorForm.firstName}
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              value={form.firstName}
            />

            <TextInput
              name="lastName"
              type="text"
              errorMsg={errorForm.lastName}
              placeholder="Last Name"
              onChange={handleChange}
              value={form.lastName}
            />
          </GetStartedContainer>
        )}
        {currentSlide === 1 && (
          <GetStartedContainer title="Age" key="32">
            <div className="flex w-full space-x-2">
              <Dropdown
                name="day"
                errorMsg={errorForm.day}
                placeholder="Day"
                items={days}
                SelectDropdownItem={SelectDropdownItem}
                value={form.day}
              />
              <Dropdown
                name="month"
                errorMsg={errorForm.month}
                placeholder="Month"
                items={months}
                SelectDropdownItem={SelectDropdownItem}
                value={form.month}
              />
            </div>
            <Dropdown
              name="year"
              errorMsg={errorForm.year}
              placeholder="Year"
              items={years}
              SelectDropdownItem={SelectDropdownItem}
              value={form.year}
            />
            <p
              className={`${
                errorForm.dateString ? "inline" : "hidden"
              } mt-1 ml-5 text-red-500 font-nunito tracking-wider text-md`}
            >
              {errorForm.dateString}
            </p>
          </GetStartedContainer>
        )}
        {currentSlide === 2 && (
          <GetStartedContainer title="Location" key="31">
            <Dropdown
              name="country"
              errorMsg={errorForm.country}
              placeholder="Country"
              items={countries}
              loading={false}
              SelectDropdownItem={SelectDropdownItem}
              value={form.country}
            />
            <Dropdown
              name="city"
              errorMsg={errorForm.city}
              placeholder="City"
              items={cities}
              loading={false}
              SelectDropdownItem={SelectDropdownItem}
              value={form.city}
            />
          </GetStartedContainer>
        )}
      </div>
      <SliderEllipses
        count={slideCount}
        current={currentSlide}
        SetActiveSlide={SetActiveSlide}
      />
      <div>
        {currentSlide === 0 && (
          <Button
            text="Next"
            color={dark ? "primary" : "secondary"}
            type="border"
            onClick={ValidateName}
            px="8"
          />
        )}
        {currentSlide === 1 && (
          <Button
            text="Next"
            color={dark ? "primary" : "secondary"}
            type="border"
            onClick={ValidateDate}
            px="8"
          />
        )}
        {currentSlide === 2 && (
          <Button
            text="Next"
            color={dark ? "primary" : "secondary"}
            type="border"
            onClick={ValidateLocation}
            px="8"
          />
        )}
      </div>
    </div>
  );
};

export default GetStartedPresentation;
