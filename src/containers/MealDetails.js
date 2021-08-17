import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { fetchMealById } from '../redux/actions/thunk';
import * as actionsType from '../redux/actions/actionTypes';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';