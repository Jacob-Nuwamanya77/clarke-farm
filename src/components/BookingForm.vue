<!-- eslint-disable max-len -->
<template>
  <div style="background-color: whitesmoke" class="container">
        <div class="row mt-5">
      <div class="col-md-9">
        <h3
          class="text-center mt-3"
          style="font-size: 18px; color: rgba(0, 0, 0, 0.6)"
        >
          Accomodation Packages
        </h3>
        <div class="row mt-3 mr-3 ml-3">
          <div
            class="col-md-4 mr-1"
            style="background-color: rgba(0, 0, 0, 0.05)"
          >
            <h6 class="mt-3 text-center mr-5">Container House</h6>
            <p class="ml-5 mt-3 font-weight-bold text-secondary">300$</p>
            <p class="ml-5 mt-0">per person</p>
            <p class="mr-5 mt-0 text-center">Full Board price</p>
          </div>
          <div class="col-md-3 mt-4 ml-3" style="background-color: #068d68">
            <h6 class="mt-3 ml-2 text-white text-center font-weight-light">
              Cottages
            </h6>
            <p
              class="mt-3 font-weight-bold text-white text-center"
              style="font-size: 33px"
            >
              300$
            </p>
            <p class="text-white text-center font-weight-light">per person</p>
            <p class="text-center font-weight-light text-white">
              Full Board price
            </p>
          </div>
          <div
            class="col-md-4 ml-3"
            style="background-color: rgba(0, 0, 0, 0.05)"
          >
            <h6 class="mt-3 text-center mr-5">Container House</h6>
            <p class="ml-5 mt-3 font-weight-bold text-secondary">300$</p>
            <p class="ml-5 mt-0">per person</p>
            <p class="text-center mr-5 mt-0">Full Board price</p>
          </div>
        </div>
        <h3
          class="mt-5 text-center"
          style="font-size: 18px; color: rgba(0, 0, 0, 0.6)"
        >
          Features & AddOns
        </h3>
        <p class="text-center mt-3" style="font-size: 14px">
          We do host corporate events and team building exercises
        </p>
        <p class="text-center" style="font-size: 14px; margin-top: -10px">
          There are different factors to consider for such events, please
          contact us
        </p>
        <p class="text-center" style="font-size: 14px; margin-top: -10px">
          for special arrangement , planning and pricing.
        </p>
        <p class="text-center" style="font-size: 14px; margin-top: 30px">
          Thank You For Choosing To Stay With Us!!
        </p>
      </div>
      <div class="col-md-3 ml-0" style="background-color: rgba(0, 0, 0, 0.05)">
        <p class="text-center mt-3" style="font-size: 15px">
          We Promise To Contact
        </p>
        <p class="text-center" style="font-size: 15px">You Within 24 Hours</p>
        <p class="text-center mt-3" style="font-size: 14px">
          Visitor Information
        </p>
        <form>
          <div>
            <input
              type="text"
              class="form-control form-control-sm mt-3"
              placeholder="Name"
            />
            <input
              type="text"
              class="form-control form-control-sm mt-3"
              placeholder="Email Address"
            />
            <input
              type="text"
              class="form-control form-control-sm mt-3"
              placeholder="Phone Number"
            />
          </div>
          <div class="form-row mt-3">
            <div class="form-group col-md-6">
              <select id="inputState" class="form-control">
                <option selected>Check in</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <select id="inputState" class="form-control text-muted">
                <option selected>Check out</option>
                <option>...</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-check form-check-inline col-md-4">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1"
                >Cottages</label
              >
            </div>
            <div class="form-check form-check-inline col-md-2">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">Tent</label>
            </div>
            <div class="form-check form-check-inline col-md-6">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label class="form-check-label" for="inlineRadio3"
                >Container</label
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
